import React, { useState, useEffect } from 'react';
import s from './Brief.module.css';



export default function BriefList({ items }) {
  
  return (
    <table className={s.BriefList}>
      <thead>
        <tr className={s.titleAll}>
          <th className={s.title}>Сводка</th>
        </tr>
      </thead>
      <tbody>
        {/* {items.map(item => ( */}
          <tr className={s.table}>
            <td className={s.columnTable}>
              1месяц 2000
              {/* {item.qwqw} */}
            </td>
            
          </tr> 
        {/* ))} */}
      </tbody>
    </table>
  );
}
