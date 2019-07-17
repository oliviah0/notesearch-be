process.env.NODE_ENV = "test";
const request = require("supertest");
const app = require("../app");

describe("GET /api/search/words=", function () {
  test("Gets the results from searching with words", async function () {
    const response = await request(app)
      .get('/api/search?words=react');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('results');
  });

  test("Gets warning message from searching without words", async function () {
    const response = await request(app)
      .get('/api/search?notword=react');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message');
  });
});
