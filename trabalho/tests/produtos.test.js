
import request from "supertest";
import app from "../src/app.js";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongo;

beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  await mongoose.connect(mongo.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongo.stop();
});

describe("Testes Produtos", () => {
  it("GET vazio", async () => {
    const res = await request(app).get("/api/v1/produtos");
    expect(res.status).toBe(200);
  });
});
