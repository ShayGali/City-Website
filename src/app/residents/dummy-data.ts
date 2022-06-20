import Resident, { MaritalStatus } from './Resident';
export const RESIDENTS = [
  new Resident(
    '12345678',
    'Shay G',
    23,
    true,
    'https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267__340.jpg',
    2005,
    MaritalStatus.BACHELOR,
    'some address'
  ),
  new Resident(
    '42398520',
    'Yossi Hachoen',
    52,
    true,
    'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636__340.jpg',
    1970,
    MaritalStatus.MARRIED,
    'some address'
  ),
  new Resident(
    '03213987',
    'Rorke Berrey',
    52,
    false,
    'https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194__340.jpg',
    2022,
    MaritalStatus.MARRIED,
    'some address'
  ),
  new Resident(
    '012587496',
    'Ofek The G',
    85,
    true,
    'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg',
    1950,
    MaritalStatus.WIDOWER,
    'some address'
  ),
  new Resident(
    '078452168',
    'Mesolam Kader',
    16,
    true,
    'https://cdn.pixabay.com/photo/2016/03/27/22/22/fox-1284512__340.jpg',
    2006,
    MaritalStatus.BACHELOR,
    'some address'
  ),
  new Resident(
    '315269875',
    'Tito Mantrip',
    21,
    true,
    'https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453__340.jpg',
    2004,
    MaritalStatus.BACHELOR,
    'some address'
  ),
];
