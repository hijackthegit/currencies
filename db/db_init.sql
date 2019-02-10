create schema currencies collate utf8mb4_0900_ai_ci;

create table currencies.currencies
(
	id int auto_increment,
	short_code varchar(32) null,
	quote float null,
	created datetime null,
	modified datetime null,
	constraint currencies_id_uindex
		unique (id),
constraint currencies_short_code_uindex
unique (short_code)
);

create table currencies.countries
(
	id int auto_increment,
	short_code varchar(32) not null,
	country_name varchar(128) null,
	constraint countries_id_uindex
		unique (id),
constraint countries_short_code_uindex
unique (short_code),
constraint countries_currencies_short_code_fk
foreign key (short_code) references currencies.currencies (short_code)
  on update cascade on delete cascade
);

alter table currencies.countries
add primary key (id);

alter table currencies.currencies
add primary key (id);

