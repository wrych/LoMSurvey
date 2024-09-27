import ORM from "./data/ORM.js";
import Migration, { MigrationSteps } from "./models/Migration.js";

const syncDatabase = async () => {
  console.log("Syncing database...");
  try {
    await ORM.sync({ alter: true });
  } catch (error) {
    console.error("Error creating database tables:", error);
  }
};

const markMigrationComplete = async (): Promise<void> => {
  await Migration.create({
    migrationName: MigrationSteps.initial,
    completedAt: new Date(),
  });
};

const runInitialSetup = async (env: string): Promise<void> => {
  const existingMigration = await Migration.findOne({
    where: { migrationName: MigrationSteps.initial },
  });

  if (!existingMigration) {
    console.log("Running initial setup...");

    await markMigrationComplete();

    console.log("Initial setup completed.");
  } else {
    console.log("Initial setup already completed, skipping.");
  }
};

export default syncDatabase;
export { runInitialSetup };
