create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  full_name text not null,
  business_name text not null,
  business_type text not null,
  whatsapp text not null,
  whatsapp_normalized text,
  email text,
  location text,
  preferred_concept text,
  message text not null,
  source_page text default 'landing_page',
  status text not null default 'new',
  notes text,
  contacted_at timestamptz,
  constraint leads_status_check check (
    status in ('new', 'contacted', 'interested', 'deal', 'rejected', 'archived')
  )
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists leads_set_updated_at on public.leads;

create trigger leads_set_updated_at
before update on public.leads
for each row
execute function public.set_updated_at();

alter table public.leads enable row level security;

drop policy if exists "Public visitors can insert leads" on public.leads;
drop policy if exists "Public visitors cannot read leads" on public.leads;
drop policy if exists "Public visitors cannot update leads" on public.leads;
drop policy if exists "Public visitors cannot delete leads" on public.leads;
drop policy if exists "Authenticated admins can read leads" on public.leads;
drop policy if exists "Authenticated admins can update leads" on public.leads;
drop policy if exists "Authenticated admins can delete leads" on public.leads;

create policy "Public visitors can insert leads"
on public.leads
for insert
to anon
with check (true);

create policy "Authenticated admins can read leads"
on public.leads
for select
to authenticated
using (true);

create policy "Authenticated admins can update leads"
on public.leads
for update
to authenticated
using (true)
with check (true);

create policy "Authenticated admins can delete leads"
on public.leads
for delete
to authenticated
using (true);
