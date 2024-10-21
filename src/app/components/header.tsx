import React from 'react'

interface msgProps {
  message: string,
};

export const Header = ({ message }: msgProps) => {
  return (
    <header className="mx-auto mt-2">
      <h1 className="text-2xl mt-8 md:text-4xl  font-redhat text-rose-500 font-bold text-center mx-auto ">
        COUNTDOWN TIMER
      </h1>
    </header>
  )};