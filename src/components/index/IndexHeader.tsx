
import React from 'react';
import Header from "@/components/Header";

interface IndexHeaderProps {
  onServiceClick?: (serviceName: string, serviceDescription: string) => void;
  onDebugClick?: (event: React.MouseEvent, title: string, description: string) => void;
}

const IndexHeader = ({ onServiceClick, onDebugClick }: IndexHeaderProps) => {
  return <Header onServiceClick={onServiceClick} onDebugClick={onDebugClick} />;
};

export default IndexHeader;
