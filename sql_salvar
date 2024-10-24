CREATE TABLE materiais
(
    id SERIAL PRIMARY KEY,
    idmateriais_compra_fornecedores INT,
    FOREIGN KEY (idmateriais_compra_fornecedores) REFERENCES materiais_compra_fornecedores(id) -- Relacionamento correto
);

CREATE TABLE clientes
(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE vendas
(
    id SERIAL PRIMARY KEY,
    idclientes INT,
    valor FLOAT NOT NULL,
    quantidade INT NOT NULL,
    tipo VARCHAR(100) NOT NULL,
    FOREIGN KEY (idclientes) REFERENCES clientes(id) -- Correção no nome da coluna
);

CREATE TABLE compra_fornecedores
(
    id SERIAL PRIMARY KEY
);

CREATE TABLE fornecedores
(
    id SERIAL PRIMARY KEY
);

CREATE TABLE vendas_materiais
(
    idvendas INT,
    idmateriais INT,
    FOREIGN KEY (idvendas) REFERENCES vendas(id),  -- Correção no nome da coluna
    FOREIGN KEY (idmateriais) REFERENCES materiais(id) -- Correção no nome da coluna
);

CREATE TABLE materiais_compra_fornecedores
(
    id SERIAL PRIMARY KEY,
    idcompra_fornecedores INT,
    FOREIGN KEY (idcompra_fornecedores) REFERENCES compra_fornecedores(id) -- Correção no nome da coluna
)

SELECT
    c.nome AS cliente,
    v.data AS data_venda,
    v.valor AS valor_total,
    v.quantidade AS quantidade_vendida,
    m.tipo AS material
FROM clientes as c

JOIN vendas v ON c.id = v.idclientes
JOIN vendas_materiais vm ON v.id = vm.idvendas
JOIN materiais m ON vm.idmateriais = m.id

WHERE
    c.nome = 'Cliente 1'  -- Altere para o nome do cliente desejado
    AND v.data BETWEEN '2024-10-01' AND '2024-10-30'  -- Altere para o período desejado
ORDER BY
    v.data;
