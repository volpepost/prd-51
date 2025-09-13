
import React from 'react';
import Sidebar from "@/components/Sidebar";

interface IndexSidebarProps {
  onQuestionClick: (questionTitle: string, question: string) => void;
}

const IndexSidebar = ({ onQuestionClick }: IndexSidebarProps) => {
  return <Sidebar onQuestionClick={onQuestionClick} />;
};

export default IndexSidebar;
