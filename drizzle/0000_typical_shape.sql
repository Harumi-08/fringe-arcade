CREATE TABLE `traffic_requests` (
	`id` text PRIMARY KEY NOT NULL,
	`created_day` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `traffic_summary` (
	`period` text NOT NULL,
	`activity` text NOT NULL,
	`events` integer DEFAULT 0 NOT NULL,
	`visitors` integer DEFAULT 0 NOT NULL,
	PRIMARY KEY(`period`, `activity`)
);
--> statement-breakpoint
CREATE TABLE `traffic_visitors` (
	`period` text NOT NULL,
	`visitor_hash` text NOT NULL,
	PRIMARY KEY(`period`, `visitor_hash`)
);
