/**
 * TypeScript Declarations - Portfolio
 * @author Farich Murobic
 * @email farichmurobiq11@gmail.com
 * @github https://github.com/FarichMurobic
 * @website https://farichmurobic.vercel.app
 */

// Enable importing JSON files as modules in TypeScript
declare module "*.json" {
  const value: any;
  export default value;
}