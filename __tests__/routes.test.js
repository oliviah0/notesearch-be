const request = require("supertest");
const app = require("../app");
process.env.NODE_ENV = "test";

describe("GET /api/search/words", function () {
  test("Gets the results from searching with words", async function () {
    const response = await request(app)
      .get('/api/search?words=react');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('results');
  });

  test("Gets warning message from searching without words", async function () {
    const response = await request(app)
      .get('/api/search?notword=react');

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('message');
  });
});

describe("GET /api/search/random", function () {
  test("Gets a single random element without query", async function () {
    const response = await request(app)
      .get('/api/random');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('results');
    expect(response.body.results).toHaveLength(1);
  });

  test("Gets a correct amount of random elements with query", async function () {
    const response = await request(app)
      .get('/api/random?amount=3');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('results');
    expect(response.body.results).toHaveLength(3);
  });
});
