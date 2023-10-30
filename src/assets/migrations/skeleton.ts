import { QueryInterface, Sequelize } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface, sequelize: Sequelize) => {
    queryInterface.sequelize.query("ALTER TABLE MyExistingTable ADD COLUMN newColumn INTEGER DEFAULT 0")
  },

  down: async (queryInterface: QueryInterface) => {
    queryInterface.sequelize.query("ALTER TABLE MyExistingTable DROP COLUMN newColumn")
  },
};
