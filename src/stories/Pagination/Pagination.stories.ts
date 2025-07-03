import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './../Pagination/Pagination';
import './StatefulPaginationWrapper';

const meta: Meta = {
  title: 'Components/Pagination',
  component: 'ctt-pagination',
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number' },
      description: 'The currently active page.',
    },
    totalPages: {
      control: { type: 'number' },
      description: 'The total number of pages.',
    },
    itemsPerPage: {
      control: { type: 'number' },
      description: 'The number of items to display per page.',
    },
    totalItems: {
      control: { type: 'number' },
      description: 'The total number of items being paginated.',
    },
    itemsPerPageOptions: {
      control: { type: 'object' },
      description: 'Options for the items per page dropdown.',
    },
    onPageChanged: { action: 'page-changed' },
    onItemsPerPageChanged: { action: 'items-per-page-changed' },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    itemsPerPage: 10,
    totalItems: 99,
    itemsPerPageOptions: [
      { label: '10', value: 10 },
      { label: '20', value: 20 },
      { label: '50', value: 50 },
    ],
  },
  render: (args) => html`
    <ctt-pagination
      .currentPage=${args.currentPage}
      .totalPages=${args.totalPages}
      .itemsPerPage=${args.itemsPerPage}
      .totalItems=${args.totalItems}
      .itemsPerPageOptions=${args.itemsPerPageOptions}
      @page-changed=${args.onPageChanged}
      @items-per-page-changed=${args.onItemsPerPageChanged}
    ></ctt-pagination>
  `,
};

export const FewPages: Story = {
  args: {
    ...Default.args,
    totalPages: 3,
    totalItems: 25,
  },
  render: (args) => html`
    <ctt-pagination
      .currentPage=${args.currentPage}
      .totalPages=${args.totalPages}
      .itemsPerPage=${args.itemsPerPage}
      .totalItems=${args.totalItems}
      .itemsPerPageOptions=${args.itemsPerPageOptions}
      @page-changed=${args.onPageChanged}
      @items-per-page-changed=${args.onItemsPerPageChanged}
    ></ctt-pagination>
  `,
};

export const ManyPages: Story = {
  args: {
    ...Default.args,
    currentPage: 15,
    totalPages: 30,
    totalItems: 295,
  },
  render: (args) => html`
    <ctt-pagination
      .currentPage=${args.currentPage}
      .totalPages=${args.totalPages}
      .itemsPerPage=${args.itemsPerPage}
      .totalItems=${args.totalItems}
      .itemsPerPageOptions=${args.itemsPerPageOptions}
      @page-changed=${args.onPageChanged}
      @items-per-page-changed=${args.onItemsPerPageChanged}
    ></ctt-pagination>
  `,
};

// Sample data for the interactive table story
const sampleData = [
  { id: 1, name: 'João Silva', email: 'joao.silva@example.com', department: 'TI', status: 'Ativo' },
  { id: 2, name: 'Maria Santos', email: 'maria.santos@example.com', department: 'RH', status: 'Ativo' },
  { id: 3, name: 'Pedro Oliveira', email: 'pedro.oliveira@example.com', department: 'Vendas', status: 'Inativo' },
  { id: 4, name: 'Ana Costa', email: 'ana.costa@example.com', department: 'Marketing', status: 'Ativo' },
  { id: 5, name: 'Carlos Pereira', email: 'carlos.pereira@example.com', department: 'TI', status: 'Ativo' },
  { id: 6, name: 'Lucia Fernandes', email: 'lucia.fernandes@example.com', department: 'Financeiro', status: 'Ativo' },
  { id: 7, name: 'Roberto Alves', email: 'roberto.alves@example.com', department: 'Vendas', status: 'Ativo' },
  { id: 8, name: 'Fernanda Lima', email: 'fernanda.lima@example.com', department: 'RH', status: 'Inativo' },
  { id: 9, name: 'Ricardo Gomes', email: 'ricardo.gomes@example.com', department: 'TI', status: 'Ativo' },
  { id: 10, name: 'Juliana Rocha', email: 'juliana.rocha@example.com', department: 'Marketing', status: 'Ativo' },
  { id: 11, name: 'Bruno Cardoso', email: 'bruno.cardoso@example.com', department: 'Vendas', status: 'Ativo' },
  { id: 12, name: 'Patricia Dias', email: 'patricia.dias@example.com', department: 'Financeiro', status: 'Ativo' },
  { id: 13, name: 'Marcelo Sousa', email: 'marcelo.sousa@example.com', department: 'TI', status: 'Inativo' },
  { id: 14, name: 'Camila Ribeiro', email: 'camila.ribeiro@example.com', department: 'RH', status: 'Ativo' },
  { id: 15, name: 'Daniel Monteiro', email: 'daniel.monteiro@example.com', department: 'Marketing', status: 'Ativo' },
  { id: 16, name: 'Renata Barbosa', email: 'renata.barbosa@example.com', department: 'Vendas', status: 'Ativo' },
  { id: 17, name: 'Thiago Nunes', email: 'thiago.nunes@example.com', department: 'TI', status: 'Ativo' },
  { id: 18, name: 'Gabriela Morais', email: 'gabriela.morais@example.com', department: 'Financeiro', status: 'Inativo' },
  { id: 19, name: 'Andre Campos', email: 'andre.campos@example.com', department: 'RH', status: 'Ativo' },
  { id: 20, name: 'Mariana Teixeira', email: 'mariana.teixeira@example.com', department: 'Marketing', status: 'Ativo' },
  { id: 21, name: 'Felipe Araujo', email: 'felipe.araujo@example.com', department: 'Vendas', status: 'Ativo' },
  { id: 22, name: 'Vanessa Martins', email: 'vanessa.martins@example.com', department: 'TI', status: 'Ativo' },
  { id: 23, name: 'Leonardo Castro', email: 'leonardo.castro@example.com', department: 'Financeiro', status: 'Inativo' },
  { id: 24, name: 'Beatriz Correia', email: 'beatriz.correia@example.com', department: 'RH', status: 'Ativo' },
  { id: 25, name: 'Gustavo Pinto', email: 'gustavo.pinto@example.com', department: 'Marketing', status: 'Ativo' },
  { id: 26, name: 'Larissa Freitas', email: 'larissa.freitas@example.com', department: 'Vendas', status: 'Ativo' },
  { id: 27, name: 'Vinicius Lopes', email: 'vinicius.lopes@example.com', department: 'TI', status: 'Ativo' },
  { id: 28, name: 'Natalia Melo', email: 'natalia.melo@example.com', department: 'Financeiro', status: 'Ativo' },
  { id: 29, name: 'Rodrigo Azevedo', email: 'rodrigo.azevedo@example.com', department: 'RH', status: 'Inativo' },
  { id: 30, name: 'Tatiana Cunha', email: 'tatiana.cunha@example.com', department: 'Marketing', status: 'Ativo' },
  { id: 31, name: 'Fabio Mendes', email: 'fabio.mendes@example.com', department: 'Vendas', status: 'Ativo' },
  { id: 32, name: 'Isabela Ramos', email: 'isabela.ramos@example.com', department: 'TI', status: 'Ativo' },
  { id: 33, name: 'Marcos Tavares', email: 'marcos.tavares@example.com', department: 'Financeiro', status: 'Ativo' },
  { id: 34, name: 'Priscila Vieira', email: 'priscila.vieira@example.com', department: 'RH', status: 'Inativo' },
  { id: 35, name: 'Lucas Ferreira', email: 'lucas.ferreira@example.com', department: 'Marketing', status: 'Ativo' },
  { id: 36, name: 'Amanda Nascimento', email: 'amanda.nascimento@example.com', department: 'Vendas', status: 'Ativo' },
  { id: 37, name: 'Raul Moreira', email: 'raul.moreira@example.com', department: 'TI', status: 'Ativo' },
  { id: 38, name: 'Stephanie Cavalcanti', email: 'stephanie.cavalcanti@example.com', department: 'Financeiro', status: 'Ativo' },
  { id: 39, name: 'Igor Macedo', email: 'igor.macedo@example.com', department: 'RH', status: 'Ativo' },
  { id: 40, name: 'Bianca Santana', email: 'bianca.santana@example.com', department: 'Marketing', status: 'Inativo' },
  { id: 41, name: 'Caio Brito', email: 'caio.brito@example.com', department: 'Vendas', status: 'Ativo' },
  { id: 42, name: 'Leticia Borges', email: 'leticia.borges@example.com', department: 'TI', status: 'Ativo' },
  { id: 43, name: 'Henrique Reis', email: 'henrique.reis@example.com', department: 'Financeiro', status: 'Ativo' },
  { id: 44, name: 'Carla Nogueira', email: 'carla.nogueira@example.com', department: 'RH', status: 'Ativo' },
  { id: 45, name: 'Rafael Guimaraes', email: 'rafael.guimaraes@example.com', department: 'Marketing', status: 'Ativo' },
  { id: 46, name: 'Aline Farias', email: 'aline.farias@example.com', department: 'Vendas', status: 'Inativo' },
  { id: 47, name: 'Diego Ribas', email: 'diego.ribas@example.com', department: 'TI', status: 'Ativo' },
  { id: 48, name: 'Sabrina Leite', email: 'sabrina.leite@example.com', department: 'Financeiro', status: 'Ativo' },
  { id: 49, name: 'Claudio Esteves', email: 'claudio.esteves@example.com', department: 'RH', status: 'Ativo' },
  { id: 50, name: 'Monica Barros', email: 'monica.barros@example.com', department: 'Marketing', status: 'Ativo' },
];

export const WithTable: Story = {
  render: () => html`
    <stateful-pagination-wrapper .data=${sampleData}></stateful-pagination-wrapper>
  `,
};
