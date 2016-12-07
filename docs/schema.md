# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
first_name      | string    | not null
last_name       | string    | not null
image_url       | string    |

## routes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed
map         | JSON      | not null
description | text      | not null

## activities
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
route_id    | integer   | not null, foreign key (references routes), indexed
title       | string    | not null
date        | date      | not null
start_time  | date      | not null
duration    | integer   | not null
description | string    |
