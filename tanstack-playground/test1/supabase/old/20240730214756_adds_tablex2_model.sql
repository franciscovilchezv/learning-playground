create table "public"."TableX2" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now()
);


alter table "public"."TableX2" enable row level security;

CREATE UNIQUE INDEX "TableX2_pkey" ON public."TableX2" USING btree (id);

alter table "public"."TableX2" add constraint "TableX2_pkey" PRIMARY KEY using index "TableX2_pkey";

grant delete on table "public"."TableX2" to "anon";

grant insert on table "public"."TableX2" to "anon";

grant references on table "public"."TableX2" to "anon";

grant select on table "public"."TableX2" to "anon";

grant trigger on table "public"."TableX2" to "anon";

grant truncate on table "public"."TableX2" to "anon";

grant update on table "public"."TableX2" to "anon";

grant delete on table "public"."TableX2" to "authenticated";

grant insert on table "public"."TableX2" to "authenticated";

grant references on table "public"."TableX2" to "authenticated";

grant select on table "public"."TableX2" to "authenticated";

grant trigger on table "public"."TableX2" to "authenticated";

grant truncate on table "public"."TableX2" to "authenticated";

grant update on table "public"."TableX2" to "authenticated";

grant delete on table "public"."TableX2" to "service_role";

grant insert on table "public"."TableX2" to "service_role";

grant references on table "public"."TableX2" to "service_role";

grant select on table "public"."TableX2" to "service_role";

grant trigger on table "public"."TableX2" to "service_role";

grant truncate on table "public"."TableX2" to "service_role";

grant update on table "public"."TableX2" to "service_role";

