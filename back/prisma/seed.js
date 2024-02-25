import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient();

async function seed() {
  try {
    // Read the JSON file
    const data = fs.readFileSync('././champions.json', 'utf8');
    const jsonData = JSON.parse(data);
    console.log(jsonData);
    // Seed the data into the database
    jsonData.forEach(async (champion) => {
      await prisma.champion.create({
        data: {
          name: champion.name,
          type: champion.type,
        },
      });
    });

    console.log('Data seeded successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
