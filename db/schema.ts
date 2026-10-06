import {sqliteTable,text,integer,primaryKey} from 'drizzle-orm/sqlite-core';
export const traffic=sqliteTable('traffic_summary',{period:text('period').notNull(),activity:text('activity').notNull(),views:integer('events').notNull().default(0),visitors:integer('visitors').notNull().default(0)},t=>[primaryKey({columns:[t.period,t.activity]})]);
export const visitors=sqliteTable('traffic_visitors',{period:text('period').notNull(),visitor:text('visitor_hash').notNull()},t=>[primaryKey({columns:[t.period,t.visitor]})]);
export const requests=sqliteTable('traffic_requests',{id:text('id').primaryKey(),created:text('created_day').notNull()});
