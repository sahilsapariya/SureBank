'use client';
import { apiRequest } from '@surebank/lib/apiClient';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@surebank/components/ui/table';
import { Button } from '@surebank/components/ui/button';
import { Card, CardContent, CardHeader } from '@surebank/components/ui/card';

type DynamoDBString = { S: string };
type DynamoDBStringSet = { SS: string[] };
type DynamoDBList = { L: { S: string }[] };
type DynamoDBNull = { NULL: boolean };

type RawProject = {
  project_id: DynamoDBString;
  title: DynamoDBString;
  summary: DynamoDBString;
  created_at: DynamoDBString;
  updated_at: DynamoDBString;
  status: DynamoDBString;
  author_id: DynamoDBString;
  target_audience: DynamoDBList;
  tags: DynamoDBStringSet;
  final_content_id?: DynamoDBNull;
  archived_at?: DynamoDBNull;
};

type ProjectsResponse = {
  projects: {
    _items: RawProject[];
  };
};

type Project = {
  project_id: string;
  title: string;
  summary: string;
  created_at: string;
  updated_at: string;
  status: string;
  author_id: string;
  target_audience: string[];
  tags: string[];
};

const Dynamo = () => {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();
  const t = useTranslations();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data: ProjectsResponse = await apiRequest<ProjectsResponse>(
          'GET',
          `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN_IP}/projects`,
        );

        const formattedProjects: Project[] = data.projects._items.map((item) => ({
          project_id: item.project_id.S,
          title: item.title.S,
          summary: item.summary.S,
          created_at: item.created_at.S,
          updated_at: item.updated_at.S,
          status: item.status.S,
          author_id: item.author_id.S,
          target_audience: item.target_audience?.L?.map((aud) => aud.S) || [],
          tags: item.tags?.SS || [],
        }));

        setProjects(formattedProjects);
      } catch (err: unknown) {
        setError(err as string);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold text-center">{t('dynamopage.header.title')}</h1>
      <div className="text-center">
        <Link href={'/'}>
          <Button variant="link" className="text-blue-600">
            {t('common.navigation.home')}
          </Button>
        </Link>
      </div>

      {loading && <div className="flex justify-center items-center">{t('common.loading')}</div>}
      {error && <div className="text-center">{error}</div>}

      {!loading && projects && projects.length > 0 && (
        <Card
          className={`w-full shadow-lg rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
        >
          <CardHeader
            className={`border-b-2 ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'}`}
          >
            <h2
              className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}
            >
              {t('dynamopage.content.heading')}
            </h2>
          </CardHeader>
          <CardContent>
            <Table
              className={`min-w-full ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
            >
              <TableHeader>
                <TableRow className="text-lg">
                  <TableHead className="text-left">
                    {t('dynamopage.content.tableHeader.title')}
                  </TableHead>
                  <TableHead className="text-left">
                    {t('dynamopage.content.tableHeader.summary')}
                  </TableHead>
                  <TableHead className="text-left">
                    {t('dynamopage.content.tableHeader.status')}
                  </TableHead>
                  <TableHead className="text-left">
                    {t('dynamopage.content.tableHeader.tags')}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <TableRow
                    key={project.project_id}
                    className={theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}
                  >
                    <TableCell>{project.title}</TableCell>
                    <TableCell>{project.summary}</TableCell>
                    <TableCell>{project.status}</TableCell>
                    <TableCell>{project.tags.join(', ')}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Dynamo;
