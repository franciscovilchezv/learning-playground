revoke delete on table "public"."Author" from "anon";

revoke insert on table "public"."Author" from "anon";

revoke references on table "public"."Author" from "anon";

revoke select on table "public"."Author" from "anon";

revoke trigger on table "public"."Author" from "anon";

revoke truncate on table "public"."Author" from "anon";

revoke update on table "public"."Author" from "anon";

revoke delete on table "public"."Author" from "authenticated";

revoke insert on table "public"."Author" from "authenticated";

revoke references on table "public"."Author" from "authenticated";

revoke select on table "public"."Author" from "authenticated";

revoke trigger on table "public"."Author" from "authenticated";

revoke truncate on table "public"."Author" from "authenticated";

revoke update on table "public"."Author" from "authenticated";

revoke delete on table "public"."Author" from "service_role";

revoke insert on table "public"."Author" from "service_role";

revoke references on table "public"."Author" from "service_role";

revoke select on table "public"."Author" from "service_role";

revoke trigger on table "public"."Author" from "service_role";

revoke truncate on table "public"."Author" from "service_role";

revoke update on table "public"."Author" from "service_role";

alter table "public"."Author" drop constraint "Author_pkey";

drop index if exists "public"."Author_pkey";

drop table "public"."Author";


