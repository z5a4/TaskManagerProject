import React from 'react';
import TitleCard from './TitleCard';
import {
  ClipboardDocumentListIcon as ClipboardListIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon as ClipboardCheckIcon,
  ClipboardDocumentIcon as ClipboardIcon,
} from "@heroicons/react/24/outline"; // Ensure these paths are correct for your version
import { Typography } from '@material-tailwind/react';

function TitleCard1() {
    
  return (
    <div className="pl-64 md:pl-48 sm:pl-36 mt-3">
    <Typography variant="h4" className='text-start mt-5' color="gray">
      User-Dashboard
    </Typography>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
    <TitleCard
          title="Total Tasks"
          description="10 tasks"
          icon={ClipboardListIcon}
        />
        <TitleCard
          title="Completed Tasks"
          description="1 task"
          icon={CheckCircleIcon}
        />
        <TitleCard
          title="Tasks in Progress"
          description="3 tasks"
          icon={ClipboardCheckIcon}
        />
        <TitleCard
          title="Todos"
          description="6 tasks"
          icon={ClipboardIcon}
        />
      </div>
    </div>
  );
}

export default TitleCard1;
