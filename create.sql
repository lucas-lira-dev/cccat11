create schema cccat11;

create table cccat11.product (
    id_product integer,
    description text,
    price numeric
);

insert into cccat11.product (id_product, description, prive) values (1, 'A', 1000);
insert into cccat11.product (id_product, description, prive) values (2, 'B', 5000);
insert into cccat11.product (id_product, description, prive) values (3, 'C', 30);

create table cccat11.coupon (
    code text,
    percentage numeric
);

insert into cccat11.coupon (code, percentage) values ('VALE20', 20);