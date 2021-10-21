import { useContext } from 'react';
import { ExpenseTrackerContext } from './context/context';

import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';
import { FormatAlignJustify } from '@material-ui/icons';
import { fontSize } from '@material-ui/system';

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const rightTransactions = transactions.filter((t) => t.type === title);
  const total = rightTransactions.reduce((acc, currVal) => acc += currVal.amount, 0);
  const categories = title === 'Income' ? incomeCategories : expenseCategories;

  rightTransactions.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((sc) => sc.amount > 0);


  const chartData = {
    datasets: [{
      data: filteredCategories.map((c) => c.amount),
      backgroundColor: filteredCategories.map((c) => c.color),
        borderColor:'wheat',
        borderWidth: 1,
        pointBorderColor:"#8884d8",
        pointBorderWidth:0,
        fill: false,
        

 

    }],
    labels: filteredCategories.map((c) => c.type),
 

   
    
  };



  const chartDataLine = {
    datasets: [{
      data: filteredCategories.map((c) => c.amount),
      backgroundColor: 'rgba(255, 16, 240, .03)',
        borderColor:'rgba(255, 16, 240)',
        borderWidth: 1,
        pointBorderColor: 'white',
        pointBorderWidth:.5,
        fill: true,

 

    }],
    labels: filteredCategories.map((c) => c.type),

    
  
 

   
    
  };

  return { filteredCategories, total, chartData, chartDataLine };
};

export default useTransactions;