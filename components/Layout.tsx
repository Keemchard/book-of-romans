import React, { FC, ReactNode, useState } from "react";
import styles from "@/styles/Layout.module.css";
import { books } from "@/__mocks__/books";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Button from "@/components/Button";
import clsx from "clsx";

const { container, sideBar, nav, chapterAndVerseStyle } = styles;

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [book, setBook] = useState("");
  const [chapter, setChapter] = useState(0);
  const [verse, setVerse] = useState(0);

  console.log(book);
  return (
    <>
      <Sheet defaultOpen>
        <nav className={nav}>
          <SheetTrigger asChild>
            {/* Todo: change this button to hamburger icon */}
            <Button width="auto" label="Open Menu" />
          </SheetTrigger>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Todo: title</SheetTitle>
            <SheetDescription>
              Todo: desc. ex: &quot;Make changes to your profile here. Click
              save when you&apos;re done.&quot;
            </SheetDescription>
          </SheetHeader>
          <div>
            <ScrollArea className={sideBar}>
              <Select
                onValueChange={(value: string) => {
                  setBook(value);
                }}
              >
                <SelectTrigger className="w-[100%]">
                  <SelectValue placeholder="Select a Book" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Old Testament</SelectLabel>
                    <SelectItem value="Genesis - static">
                      Genesis - static
                    </SelectItem>
                    <SelectItem value="Exodus - static">
                      Exodus - static
                    </SelectItem>
                    <SelectLabel>New Testament</SelectLabel>
                    {books.map((item) => {
                      return (
                        <SelectItem key={item.title} value={item.title}>
                          {item.title}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* // TODO: add query parameter */}
              {/* CHAPTER */}
              <div className={chapterAndVerseStyle}>
                {books.map((item) => {
                  if (item.title === book) {
                    return item.chapters.map((item) => {
                      return (
                        <Button
                          key={item.chapter_num}
                          label={String(item.chapter_num)}
                          onClick={() => {
                            setChapter(item.chapter_num);
                          }}
                          width="auto"
                          bgColor={clsx(
                            item.chapter_num === chapter && "yellow"
                          )}
                        />
                      );
                    });
                  }
                })}
              </div>
              {/* VERSE */}
              <div className={chapterAndVerseStyle}>
                {books.map((item) => {
                  if (item.title === book) {
                    return item.chapters.map((item) => {
                      if (item.chapter_num === chapter) {
                        return item.verses.map((item) => {
                          return (
                            <Button
                              key={item.verse_num}
                              label={String(item.verse_num)}
                              onClick={() => {
                                setVerse(item.verse_num);
                                // TODO: add link here to specific verses layout
                                // separate the fuction
                              }}
                              width="auto"
                              bgColor={clsx(
                                item.verse_num === verse && "green"
                              )}
                            />
                          );
                        });
                      }
                    });
                  }
                })}
              </div>
            </ScrollArea>
          </div>
          {/* <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter> */}
        </SheetContent>
      </Sheet>
      <div className={container}>
        <div>
          <nav></nav>
        </div>
        <div>
          <main>{children}</main>
          {`Book: ${book} ${chapter}:${verse}`}
        </div>
      </div>
    </>
  );
};

export default Layout;
