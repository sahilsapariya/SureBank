'use client';
import { apiRequest } from '@surebank/lib/apiClient';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
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
import { useTranslations } from 'next-intl';

type User = {
  password: string;
  phone_number: string;
  app_data: string;
  signup_methods: string;
  phone_number_verified_at: number;
  given_name: string;
  picture: string | null;
  key: string;
  family_name: string;
  roles: string;
  id: string;
  middle_name: string | null;
  revoked_timestamp: number | null;
  email: string;
  nickname: string;
  is_multi_factor_auth_enabled: boolean;
  email_verified_at: number;
  gender: string;
  updated_at: number;
  birthdate: string;
  created_at: number;
};

type UsersResponse = {
  users: User[];
};

const Sql = () => {
  const [users, setUsers] = useState<UsersResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();
  const t = useTranslations();

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        setLoading(true);
        const data: UsersResponse = await apiRequest<UsersResponse>(
          'GET',
          `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN_IP}/users`,
        );
        setUsers(data);
      } catch (err: unknown) {
        setError(err as string);
      } finally {
        setLoading(false);
      }
    };

    fetchUsersData();
  }, []);

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold text-center">{t('sqlpage.header.title')}</h1>
      <div className="text-center">
        <Link href={'/'}>
          <Button variant="link" className="text-blue-600">
            {t('common.navigation.home')}
          </Button>
        </Link>
      </div>

      {loading && <div className="flex justify-center items-center">{t('common.loading')}</div>}
      {error && <div className="text-center">{error}</div>}

      {!loading && users && users.users.length > 0 && (
        <Card
          className={`w-full shadow-lg rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
        >
          <CardHeader
            className={`border-b-2 ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'}`}
          >
            <h2
              className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}
            >
              {t('sqlpage.content.heading')}
            </h2>
          </CardHeader>
          <CardContent>
            <Table
              className={`min-w-full ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
            >
              <TableHeader>
                <TableRow className="text-lg">
                  <TableHead className="text-left">
                    {t('sqlpage.content.tableHeader.name')}
                  </TableHead>
                  <TableHead className="text-left">
                    {t('sqlpage.content.tableHeader.email')}
                  </TableHead>
                  <TableHead className="text-left">
                    {t('sqlpage.content.tableHeader.phone')}
                  </TableHead>
                  <TableHead className="text-left">
                    {t('sqlpage.content.tableHeader.role')}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.users.map((user) => (
                  <TableRow
                    key={user.id}
                    className={theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}
                  >
                    <TableCell>{`${user.given_name} ${user.middle_name ? user.middle_name + ' ' : ''}${user.family_name}`}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone_number}</TableCell>
                    <TableCell>{user.roles}</TableCell>
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

export default Sql;
