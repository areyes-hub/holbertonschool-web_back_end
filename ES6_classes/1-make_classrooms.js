import ClassRoom from './0-classroom';

export default function initializeRooms() {
  let idx = 0;
  const values = [19, 20, 34];
  const classRooms = [];
  for (const value of values) {
    classRooms[idx] = new ClassRoom(value);
    idx += 1;
  }
  return classRooms;
}
