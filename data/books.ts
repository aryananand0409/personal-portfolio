export type Book = {
  title: string
  author: string
  status: 'reading' | 'read'
}

export const books: Book[] = [
  // Currently reading
  { title: 'The Will of the Many', author: 'James Islington', status: 'reading' },
  { title: 'Pachinko', author: 'Min Jin Lee', status: 'reading' },

  // Have read
  { title: 'Babel',                              author: 'R.F. Kuang',         status: 'read' },
  { title: 'The Kite Runner',                    author: 'Khaled Hosseini',    status: 'read' },
  { title: 'The Island of the Missing Tree',     author: 'Elif Şafak',         status: 'read' },
  { title: 'Tuesdays with Morrie',               author: 'Mitch Albom',        status: 'read' },
  { title: 'The Quiet American',                 author: 'Graham Greene',      status: 'read' },
  { title: 'Never Lie',                          author: 'Freida McFadden',    status: 'read' },
  { title: 'Frankenstein',                       author: 'Mary Shelley',       status: 'read' },
  { title: 'More Days at the Morisaki Bookshop', author: 'Satoshi Yagisawa',   status: 'read' },
  { title: 'Butter',                             author: 'Asako Yuzuki',       status: 'read' },
  { title: 'As Long as the Lemon Trees Grow',    author: 'Zoulfa Katouh',      status: 'read' },
  { title: 'Mornings with My Cat Mii',           author: 'Ayano Hana',         status: 'read' },
  { title: 'Mother Mary Comes to Me',            author: 'Arundhati Roy',      status: 'read' },
  { title: 'Hot Chocolate on Thursday',          author: 'Michiko Aoyoma',     status: 'read' },
  { title: 'East of Eden',                       author: 'John Steinbeck',     status: 'read' },
  { title: 'Stranger Houses',                    author: 'Uketsu',    status: 'read' },
  { title: 'Dungeon Crawler Carl #1',            author: 'Matt Diniman',      status: 'read' },
  { title: 'Mr. Mercedes',                       author: 'Stephen King',  status: 'read' },
  { title: 'Project Hail Mary',                  author: 'Andy Weir',  status: 'read' },
  {title: 'Kane and Abel', author: 'Jeffrey Archer', status: 'read' },
  {title: 'Intermezzo', author: 'Sally Rooney', status: 'read' },
  {title: 'There are Rivers in the Sky', author: 'Elif Shafak', status: 'read' },
  {title: 'The Forty Rules of Love', author: 'Elif Shafak', status: 'read' },
  {title: 'The Palace of Illusions', author: 'Chitra Banerjee Divakaruni', status: 'read' },
  {title: 'The Forest of Enchantments', author: 'Chitra Banerjee Divakaruni', status: 'read' },
]

export function currentlyReading(): Book | undefined {
  return books.find(b => b.status === 'reading')
}

export function haveRead(): Book[] {
  return books.filter(b => b.status === 'read')
}
