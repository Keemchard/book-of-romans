type Content = {
  title: string;
  keyPoints: string[];
  body: string;
  image?: string;
};

type Verse = {
  verse_num: number;
  content: Content;
};

type Chapter = {
  chapter_num: number;
  numberOfverses?: string;
  verses: Verse[];
};

type Books = {
  title: string;
  numberOfChapters?: string;
  chapters: Chapter[];
};

export const books: Books[] = [
  {
    title: "Romans",
    chapters: [
      {
        chapter_num: 1,
        verses: [
          {
            verse_num: 1,
            content: {
              title:
                "Paul, servant of Christ Jesus, called to be an apostle, set apart for the Gospel of God",
              keyPoints: [
                "Paul, a servant of Christ Jesus",
                "Paul, called to be an apostle",
                "Paul, separated for the Gospel of God",
              ],
              body: "This is the Romans Chapter 1 Verse 1 mock content",
            },
          },
          {
            verse_num: 2,
            content: {
              title:
                "The Gospel he promised beforehand through His Prophets in the Holy Scriptures",
              keyPoints: ["Promise of the Gospel", "Prophetic Fulfillment"],
              body: "This is the Romans Chapter 1 Verse 2 mock content",
            },
          },
          {
            verse_num: 3,
            content: {
              title:
                "concerning His Son, which was descended from David according to the flesh",
              keyPoints: [
                "Descendant of David",
                "Theology of Incarnation",
                "Messiaship",
              ],
              body: "This is the Romans Chapter 1 Verse 3 mock content",
            },
          },
        ],
      },
      {
        chapter_num: 2,
        verses: [
          {
            verse_num: 1,
            content: {
              title:
                "Paul, servant of Christ Jesus, called to be an apostle, set apart for the Gospel of God",
              keyPoints: [
                "Paul, a servant of Christ Jesus",
                "Paul, called to be an apostle",
                "Paul, separated for the Gospel of God",
              ],
              body: "This is the Romans Chapter 1 Verse 1 mock content",
            },
          },
        ],
      },
      {
        chapter_num: 2,
        verses: [
          {
            verse_num: 1,
            content: {
              title:
                "Paul, servant of Christ Jesus, called to be an apostle, set apart for the Gospel of God",
              keyPoints: [
                "Paul, a servant of Christ Jesus",
                "Paul, called to be an apostle",
                "Paul, separated for the Gospel of God",
              ],
              body: "This is the Romans Chapter 1 Verse 1 mock content",
            },
          },
        ],
      },
      {
        chapter_num: 2,
        verses: [
          {
            verse_num: 1,
            content: {
              title:
                "Paul, servant of Christ Jesus, called to be an apostle, set apart for the Gospel of God",
              keyPoints: [
                "Paul, a servant of Christ Jesus",
                "Paul, called to be an apostle",
                "Paul, separated for the Gospel of God",
              ],
              body: "This is the Romans Chapter 1 Verse 1 mock content",
            },
          },
        ],
      },
      {
        chapter_num: 2,
        verses: [
          {
            verse_num: 1,
            content: {
              title:
                "Paul, servant of Christ Jesus, called to be an apostle, set apart for the Gospel of God",
              keyPoints: [
                "Paul, a servant of Christ Jesus",
                "Paul, called to be an apostle",
                "Paul, separated for the Gospel of God",
              ],
              body: "This is the Romans Chapter 1 Verse 1 mock content",
            },
          },
        ],
      },
      {
        chapter_num: 2,
        verses: [
          {
            verse_num: 1,
            content: {
              title:
                "Paul, servant of Christ Jesus, called to be an apostle, set apart for the Gospel of God",
              keyPoints: [
                "Paul, a servant of Christ Jesus",
                "Paul, called to be an apostle",
                "Paul, separated for the Gospel of God",
              ],
              body: "This is the Romans Chapter 1 Verse 1 mock content",
            },
          },
        ],
      },
      {
        chapter_num: 2,
        verses: [
          {
            verse_num: 1,
            content: {
              title:
                "Paul, servant of Christ Jesus, called to be an apostle, set apart for the Gospel of God",
              keyPoints: [
                "Paul, a servant of Christ Jesus",
                "Paul, called to be an apostle",
                "Paul, separated for the Gospel of God",
              ],
              body: "This is the Romans Chapter 1 Verse 1 mock content",
            },
          },
        ],
      },
      {
        chapter_num: 2,
        verses: [
          {
            verse_num: 1,
            content: {
              title:
                "Paul, servant of Christ Jesus, called to be an apostle, set apart for the Gospel of God",
              keyPoints: [
                "Paul, a servant of Christ Jesus",
                "Paul, called to be an apostle",
                "Paul, separated for the Gospel of God",
              ],
              body: "This is the Romans Chapter 1 Verse 1 mock content",
            },
          },
        ],
      },
      {
        chapter_num: 2,
        verses: [
          {
            verse_num: 1,
            content: {
              title:
                "Paul, servant of Christ Jesus, called to be an apostle, set apart for the Gospel of God",
              keyPoints: [
                "Paul, a servant of Christ Jesus",
                "Paul, called to be an apostle",
                "Paul, separated for the Gospel of God",
              ],
              body: "This is the Romans Chapter 1 Verse 1 mock content",
            },
          },
        ],
      },
      {
        chapter_num: 2,
        verses: [
          {
            verse_num: 1,
            content: {
              title:
                "Paul, servant of Christ Jesus, called to be an apostle, set apart for the Gospel of God",
              keyPoints: [
                "Paul, a servant of Christ Jesus",
                "Paul, called to be an apostle",
                "Paul, separated for the Gospel of God",
              ],
              body: "This is the Romans Chapter 1 Verse 1 mock content",
            },
          },
        ],
      },
      {
        chapter_num: 2,
        verses: [
          {
            verse_num: 1,
            content: {
              title:
                "Paul, servant of Christ Jesus, called to be an apostle, set apart for the Gospel of God",
              keyPoints: [
                "Paul, a servant of Christ Jesus",
                "Paul, called to be an apostle",
                "Paul, separated for the Gospel of God",
              ],
              body: "This is the Romans Chapter 1 Verse 1 mock content",
            },
          },
        ],
      },
      {
        chapter_num: 2,
        verses: [
          {
            verse_num: 1,
            content: {
              title:
                "Paul, servant of Christ Jesus, called to be an apostle, set apart for the Gospel of God",
              keyPoints: [
                "Paul, a servant of Christ Jesus",
                "Paul, called to be an apostle",
                "Paul, separated for the Gospel of God",
              ],
              body: "This is the Romans Chapter 1 Verse 1 mock content",
            },
          },
        ],
      },
    ],
  },
  {
    title: "Revelation",
    chapters: [],
  },
];
