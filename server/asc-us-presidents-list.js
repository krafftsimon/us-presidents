const ascUsPresidents = [
  {
    "president": "Abraham Lincoln",
    "birthday": "1809-2-12",
    "birthplace": "LaRue Co., Kentucky",
    "deathDay": "1865-4-15",
    "deathPlace": "Washington, D.C."
  },
  {
    "president": "Andrew Jackson",
    "birthday": "1767-3-15",
    "birthplace": "Waxhaws, No./So. Carolina",
    "deathDay": "1845-6-8",
    "deathPlace": "Nashville, Tennessee"
  },
  {
    "president": "Andrew Johnson",
    "birthday": "1808-12-29",
    "birthplace": "Raleigh, North Carolina",
    "deathDay": "1875-7-31",
    "deathPlace": "Elizabethton, Tenn."
  },
  {
    "president": "Barack Obama",
    "birthday": "1961-8-4",
    "birthplace": "Honolulu, Hawaii",
    "deathDay": "",
    "deathPlace": ""
  },
  {
    "president": "Benjamin Harrison",
    "birthday": "1833-8-20",
    "birthplace": "North Bend, Ohio",
    "deathDay": "1901-3-13",
    "deathPlace": "Indianapolis, Indiana"
  },
  {
    "president": "Bill Clinton",
    "birthday": "1946-8-19",
    "birthplace": "Hope, Arkansas",
    "deathDay": "",
    "deathPlace": ""
  },
  {
    "president": "Calvin Coolidge",
    "birthday": "1872-7-4",
    "birthplace": "Plymouth, Vermont",
    "deathDay": "1933-1-5",
    "deathPlace": "Northampton, Mass."
  },
  {
    "president": "Chester Arthur",
    "birthday": "1829-10-5",
    "birthplace": "Fairfield, Vermont",
    "deathDay": "1886-11-18",
    "deathPlace": "New York, New York"
  },
  {
    "president": "Donald Trump",
    "birthday": "1946-6-14",
    "birthplace": "New York, New York",
    "deathDay": "",
    "deathPlace": ""
  },
  {
    "president": "Dwight Eisenhower",
    "birthday": "1890-10-14",
    "birthplace": "Denison, Texas",
    "deathDay": "1969-3-28",
    "deathPlace": "Washington, D.C."
  },
  {
    "president": "Franklin Pierce",
    "birthday": "1804-11-23",
    "birthplace": "Hillsborough, N.H.",
    "deathDay": "1869-10-8",
    "deathPlace": "Concord, New Hamp."
  },
  {
    "president": "Franklin Roosevelt",
    "birthday": "1882-1-30",
    "birthplace": "Hyde Park, New York",
    "deathDay": "1945-4-12",
    "deathPlace": "Warm Springs, Georgia"
  },
  {
    "president": "George Bush",
    "birthday": "1924-6-12",
    "birthplace": "Milton, Mass.",
    "deathDay": "",
    "deathPlace": ""
  },
  {
    "president": "George W. Bush",
    "birthday": "1646-7-6",
    "birthplace": "New Haven, Conn.",
    "deathDay": "",
    "deathPlace": ""
  },
  {
    "president": "George Washington",
    "birthday": "1732-2-22",
    "birthplace": "Westmoreland Co., Va.",
    "deathDay": "1799-12-14",
    "deathPlace": "Mount Vernon, Va."
  },
  {
    "president": "Gerald Ford",
    "birthday": "1913-7-14",
    "birthplace": "Omaha, Nebraska",
    "deathDay": "2006-12-26",
    "deathPlace": "Rancho Mirage, Cal."
  },
  {
    "president": "Grover Cleveland",
    "birthday": "1837-3-18",
    "birthplace": "Caldwell, New Jersey",
    "deathDay": "1908-6-24",
    "deathPlace": "Princeton, New Jersey"
  },
  {
    "president": "Harry S. Truman",
    "birthday": "1884-5-8",
    "birthplace": "Lamar, Missouri",
    "deathDay": "1972-12-26",
    "deathPlace": "Kansas City, Missouri"
  },
  {
    "president": "Herbert Hoover",
    "birthday": "1874-8-10",
    "birthplace": "West Branch, Iowa",
    "deathDay": "1964-10-20",
    "deathPlace": "New York, New York"
  },
  {
    "president": "James A. Garfield",
    "birthday": "1831-11-19",
    "birthplace": "Cuyahoga Co., Ohio",
    "deathDay": "1881-9-19",
    "deathPlace": "Elberon, New Jersey"
  },
  {
    "president": "James Buchanan",
    "birthday": "1791-4-23",
    "birthplace": "Cove Gap, Pa.",
    "deathDay": "1868-6-1",
    "deathPlace": "Lancaster, Pa."
  },
  {
    "president": "James K. Polk",
    "birthday": "1795-11-2",
    "birthplace": "Mecklenburg Co., N.C.",
    "deathDay": "1849-6-15",
    "deathPlace": "Nashville, Tennessee"
  },
  {
    "president": "James Madison",
    "birthday": "1751-3-16",
    "birthplace": "Port Conway, Va.",
    "deathDay": "1836-6-28",
    "deathPlace": "Orange Co., Va."
  },
  {
    "president": "James Monroe",
    "birthday": "1758-4-28",
    "birthplace": "Westmoreland Co., Va.",
    "deathDay": "1831-7-4",
    "deathPlace": "New York, New York"
  },
  {
    "president": "Jimmy Carter",
    "birthday": "1924-10-1",
    "birthplace": "Plains, Georgia",
    "deathDay": "",
    "deathPlace": ""
  },
  {
    "president": "John Adams",
    "birthday": "1735-10-30",
    "birthplace": "Quincy, Mass.",
    "deathDay": "1826-7-4",
    "deathPlace": "Quincy, Mass."
  },
  {
    "president": "John F. Kennedy",
    "birthday": "1917-5-29",
    "birthplace": "Brookline, Mass.",
    "deathDay": "1963-11-22",
    "deathPlace": "Dallas, Texas"
  },
  {
    "president": "John Quincy Adams",
    "birthday": "1767-7-11",
    "birthplace": "Quincy, Mass.",
    "deathDay": "1848-2-23",
    "deathPlace": "Washington, D.C."
  },
  {
    "president": "John Tyler",
    "birthday": "1790-3-29",
    "birthplace": "Charles City Co., Va.",
    "deathDay": "1862-1-18",
    "deathPlace": "Richmond, Va."
  },
  {
    "president": "Lyndon B. Johnson",
    "birthday": "1908-8-27",
    "birthplace": "Gillespie Co., Texas",
    "deathDay": "1973-1-22",
    "deathPlace": "Gillespie Co., Texas"
  },
  {
    "president": "Martin Van Buren",
    "birthday": "1782-12-5",
    "birthplace": "Kinderhook, New York",
    "deathDay": "1862-7-24",
    "deathPlace": "Kinderhook, New York"
  },
  {
    "president": "Millard Fillmore",
    "birthday": "1800-1-7",
    "birthplace": "Cayuga Co., New York",
    "deathDay": "1874-3-8",
    "deathPlace": "Buffalo, New York"
  },
  {
    "president": "Richard Nixon",
    "birthday": "1913-1-9",
    "birthplace": "Yorba Linda, Cal.",
    "deathDay": "1994-4-22",
    "deathPlace": "New York, New York"
  },
  {
    "president": "Ronald Reagan",
    "birthday": "1911-2-6",
    "birthplace": "Tampico, Illinois",
    "deathDay": "2004-6-5",
    "deathPlace": "Los Angeles, Cal."
  },
  {
    "president": "Rutherford B. Hayes",
    "birthday": "1822-10-4",
    "birthplace": "Delaware, Ohio",
    "deathDay": "1893-1-17",
    "deathPlace": "Fremont, Ohio"
  },
  {
    "president": "Theodore Roosevelt",
    "birthday": "1858-10-27",
    "birthplace": "New York, New York",
    "deathDay": "1919-1-6",
    "deathPlace": "Oyster Bay, New York"
  },
  {
    "president": "Thomas Jefferson",
    "birthday": "1743-4-13",
    "birthplace": "Albemarle Co., Va.",
    "deathDay": "1826-7-4",
    "deathPlace": "Albemarle Co., Va."
  },
  {
    "president": "Ulysses S. Grant",
    "birthday": "1822-4-27",
    "birthplace": "Point Pleasant, Ohio",
    "deathDay": "1885-7-23",
    "deathPlace": "Wilton, New York"
  },
  {
    "president": "Warren G. Harding",
    "birthday": "1865-11-2",
    "birthplace": "Morrow County, Ohio",
    "deathDay": "1923-8-2",
    "deathPlace": "San Francisco, Cal."
  },
  {
    "president": "William Henry Harrison",
    "birthday": "1773-2-9",
    "birthplace": "Charles City Co., Va.",
    "deathDay": "1841-4-4",
    "deathPlace": "Washington, D.C."
  },
  {
    "president": "William Howard Taft",
    "birthday": "1857-9-15",
    "birthplace": "Cincinnati, Ohio",
    "deathDay": "1930-3-8",
    "deathPlace": "Washington, D.C."
  },
  {
    "president": "William McKinley",
    "birthday": "1843-1-29",
    "birthplace": "Niles, Ohio",
    "deathDay": "1901-9-14",
    "deathPlace": "Buffalo, New York"
  },
  {
    "president": "Woodrow Wilson",
    "birthday": "1856-12-28",
    "birthplace": "Staunton, Virginia",
    "deathDay": "1924-2-3",
    "deathPlace": "Washington, D.C."
  },
  {
    "president": "Zachary Taylor",
    "birthday": "1784-11-24",
    "birthplace": "Orange County, Va.",
    "deathDay": "1850-7-9",
    "deathPlace": "Washington, D.C"
  }
]

module.exports = ascUsPresidents;