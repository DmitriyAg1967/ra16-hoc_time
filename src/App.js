import React, { useState } from 'react';
import VideoList from './components/VideoList/VideoList';
import { data } from './data';

export default function App() {
  const [list] = useState(data);

  return (
    <VideoList list={list} />
  );
}