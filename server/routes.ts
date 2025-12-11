import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactRequestSchema.safeParse(req.body);
      
      if (!parsed.success) {
        return res.status(400).json({ 
          error: "Invalid request data",
          details: parsed.error.errors 
        });
      }

      const contactRequest = await storage.createContactRequest(parsed.data);
      return res.status(201).json(contactRequest);
    } catch (error) {
      console.error("Error creating contact request:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  return httpServer;
}
