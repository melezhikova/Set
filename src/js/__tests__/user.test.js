import Team from '../app';
import Character from '../basic';

test('should add new member', () => {
  const ann = new Character('Ann');
  const members = new Team();
  members.addMember(ann);

  const expected = new Set();
  expected.add(ann);

  expect(members.members).toEqual(expected);
});

test('error when try to add new member', () => {
  function adding() {
    const ann = new Character('Ann');
    const members = new Team();
    members.addMember(ann);
    members.addMember(ann);
  }

  expect(adding).toThrowError('Такой персонаж уже добавлен');
});

test('should add new members', () => {
  const ann = new Character('Ann');
  const ivan = new Character('Ivan');
  const members = new Team();
  members.addMember(ann);
  members.addAll(ann, ivan);

  const expected = new Set();
  expected.add(ann);
  expected.add(ivan);

  expect(members.members).toEqual(expected);
});

test('get array from members', () => {
  const ann = new Character('Ann');
  const ivan = new Character('Ivan');
  const members = new Team();
  members.addAll(ann, ivan);
  const received = members.toArray();

  const expected = [];
  expected.push(ann);
  expected.push(ivan);

  expect(received).toEqual(expected);
});
