import Select from 'react-select';
import './CategorySelect.module.css';

// const options = [
//   { value: 'транспорт', label: 'Транспорт' },
//   { value: 'продукты', label: 'Продукты' },
//   { value: 'здоровье', label: 'Здоровье' },
//   { value: 'алкоголь', label: 'Алкоголь' },
//   { value: 'развлечение', label: 'Развлечение' },
//   { value: 'все для дома', label: 'Все для дома' },
//   { value: 'техника', label: 'Техника' },
//   { value: 'коммуналка, связь', label: 'Коммуналка, связь' },
//   { value: 'спорт, хобби', label: 'Спорт, хобби' },
//   { value: 'образование', label: 'Образование' },
//   { value: 'прочее', label: 'Прочее' },
// ];

export default function CategorySelect({
  onChange,
  category,
  placeholder,
  options,
  income,
}) {
  const customStyles = {
    option: (provided, { isSelected }) => ({
      ...provided,
      color: isSelected ? '#52555f' : '#c7ccdc',
      backgroundColor: isSelected ? '#f5f6fb' : 'none',
      ':hover': {
        color: '#52555f',
        backgroundColor: '#f5f6fb',
      },
      cursor: 'pointer',
    }),
    control: () => ({
      display: 'flex',
      width: '100%',
      height: 44,
      paddingTop: 1,
      paddingBottom: 2,
      border: '2px solid #f5f6fb',
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: 'none',
    }),
    menuList: (provided, state) => ({
      ...provided,
      overflow: 'inherit',
    }),
    container: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
    }),
    menu: (provided, state) => ({
      ...provided,
      top: 34,
      height: income ? 70 : 340,
      borderRadius: 'none',
      boxShadow: '0px 3px 4px rgba(170, 178, 197, 0.4)',
      border: '2px solid #f5f6fb',
    }),
  };

  return (
    <Select
      styles={customStyles}
      placeholder={placeholder}
      onChange={onChange}
      value={category}
      options={options}
    />
  );
}
