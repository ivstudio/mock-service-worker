import { useEffect, useState } from 'react';

import {
    List,
    ListHead,
    ListItemLink,
    ListLabelItem,
    ListLabels,
    ListRow,
    NoDataMessage,
} from './components/List';
import { Spinner } from './components/Spinner';
import { Issue, Label } from './types/openIssues.type';

const fetchOpenIssues = async (): Promise<Issue[]> => {
    const url = 'https://api.github.com/repos/facebook/react/issues';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Req failed: ${response.status}`);
        }
        const data: Issue[] = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

const App = () => {
    const [openIssues, setOpenIssues] = useState<Issue[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        const loadIssues = async () => {
            try {
                const data = await fetchOpenIssues();
                setOpenIssues(data);
            } catch (err) {
                console.error('Error fetching issues:', err);
                setOpenIssues([]);
            } finally {
                setIsLoading(false);
            }
        };

        loadIssues();
    }, []);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <main className="pt-8">
            {openIssues.length ? (
                <List>
                    <ListHead title="Open Issues" />
                    <ListRow>
                        {openIssues.map((issue: Issue) => (
                            <ListItemLink
                                key={issue.id}
                                subText={`#${issue.number} opened by ${issue.user.login}`}
                                title={issue.title}
                                url={issue.url}
                            >
                                <ListLabels>
                                    {issue.labels?.length
                                        ? issue.labels.map((label: Label) => (
                                              <ListLabelItem
                                                  key={label.id}
                                                  label={label.name}
                                                  style={{
                                                      color: `#${label.color}`,
                                                      backgroundColor: `#${label.color}20`,
                                                      borderColor: `#${label.color}50`,
                                                  }}
                                              />
                                          ))
                                        : null}
                                </ListLabels>
                            </ListItemLink>
                        ))}
                    </ListRow>
                </List>
            ) : (
                <NoDataMessage message="No open issues found." />
            )}
        </main>
    );
};

export default App;
