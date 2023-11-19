import { t } from '@appString/index';
// Define the type of props (if any) your component accepts.
interface IndexProps {
  // Define your props here, if any.
}

const Index: React.FC<IndexProps> = () => {
  return (
    <div>
      <div>{t('menu.subMenu.deep.test',{
        name: 'Sindre',
        phone: {
          mobile: '609 24 363'
        }
      })}</div>
      <div>
        {
          t('menu.subMenu.text')
        }
      </div>
    </div>
  );
};

export default Index;
