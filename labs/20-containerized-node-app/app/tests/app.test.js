import test from 'node:test';
import assert from 'node:assert';
import { buildApp } from '../app.js';

test('GET /health renvoie un statut 200 et ok: true', async () => {
  const app = await buildApp();
  
  const response = await app.inject({
    method: 'GET',
    url: '/health'
  });

  assert.strictEqual(response.statusCode, 200);
  assert.deepStrictEqual(JSON.parse(response.payload), { ok: true });
  
  await app.close();
});

test('GET / (route racine) renvoie un statut 200', async () => {
  const app = await buildApp();
  
  const response = await app.inject({
    method: 'GET',
    url: '/'
  });

  assert.strictEqual(response.statusCode, 200);
  
  await app.close();
});