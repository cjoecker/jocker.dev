import { ButtonUnstyled } from '@mui/base';
import { motion, Reorder } from 'framer-motion';
import { useState } from 'react';

import { OWN_APPS } from '../../constants/own-apps';

export type Props = {
  item: string;
};
export const AppButton = ({ item }: Props) => {
  const appInfo = OWN_APPS.find(app => app.name === item);
  const images = require.context('./images', false);
  const imagePath = images(`./${appInfo?.icon}`);
  const [isDragging, setIsDragging] = useState(false);
  const onClick = () => {
    if (!isDragging) {
      window.open(appInfo?.link, '_blank');
    }
  };
  return (
    <Reorder.Item
      as={'div'}
      className="flex-1 cursor-pointer"
      id={item}
      value={item}
      whileDrag={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, opacity: 0.6 }}
      onDragStart={() => setIsDragging(true)}
      onMouseDown={() => setIsDragging(false)}
    >
        <motion.div
          whileHover={{
            opacity: Array(5).fill(0.9),
            rotate: [0, -3, 0, 3, 0],
            transition: {
              duration: 0.5,
              times: [0, 0.25, 0.5, 0.75, 1],
              repeat: Number.POSITIVE_INFINITY,
            },
          }}
        >
          <ButtonUnstyled
            style={{backgroundImage: `url(${imagePath})`}}
            className="w-16 h-16 mb-1 rounded-xl border-none cursor-pointer"
            onClick={onClick}
          />
        </motion.div>
        <div className="block text-center whitespace-normal">{appInfo?.name}</div>
    </Reorder.Item>
  );
};
