import { v4 as uuidv4 } from 'uuid';

export default function getRandomId(quantity: string): string {
  const id = uuidv4().slice(0, Number(quantity));
  return id;
}
