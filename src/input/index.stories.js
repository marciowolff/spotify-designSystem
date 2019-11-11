import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from './index';

storiesOf('Input', module)
  .add('Simples', () => (
    <Input id="teste" />
  ))
  .add('Label', () => (
    <Input id="teste" label="Label do input" />
  ))
  .add('Placeholder', () => (
    <Input id="teste" placeholder="com placeholder" />
  ))
  .add('Valor inicial', () => (
    <Input id="teste" defaultValue="valor inicial"/>
  ))
  .add('Evento change', () => (
    <Input id="teste" handleChange={action('clicou')} />
  ))
  .add('Desabilitado', () => (
    <Input id="teste" disabled />
  ))
  .add('Obrigatório', () => (
    <Input id="teste" required />
  ))
  .add('Erro', () => (
    <Input id="teste" error required />
  ))
  .add('Classe adicional', () => (
    <Input id="teste" className="classe-1" />
  ))
