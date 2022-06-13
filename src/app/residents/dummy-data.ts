import Resident, { MaritalStatus } from './Resident';

const data = [
  new Resident(
    '12345678',
    'Shay Gali',
    23,
    true,
    '',
    2005,
    MaritalStatus.BACHELOR,
    'some address'
  ),
  new Resident(
    '42398520',
    'Yossi Hachoen',
    52,
    true,
    '',
    1970,
    MaritalStatus.MARRIED,
    'some address'
  ),
  new Resident(
    '03213987',
    'Loren Halevi',
    52,
    false,
    '',
    2022,
    MaritalStatus.MARRIED,
    'some address'
  ),
  new Resident(
    '012587496',
    'Ofek The G',
    85,
    true,
    '',
    1950,
    MaritalStatus.WIDOWER,
    'some address'
  ),
  new Resident(
    '0784542168',
    'Mesolam Kader',
    16,
    true,
    '',
    2006,
    MaritalStatus.BACHELOR,
    'some address'
  ),
  new Resident(
    '315269875',
    'Bar Gali',
    21,
    true,
    '',
    2004,
    MaritalStatus.BACHELOR,
    'some address'
  ),
];
