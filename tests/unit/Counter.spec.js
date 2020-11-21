import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/vue';
import Counter from '@/components/Counter.vue';
import { store } from '@/store';

test('At the beginning count should be 0', () => {
  const { getByText } = render(Counter, { store });

  expect(getByText('目前計數0')).toBeInTheDocument();
});

test('After click increment button the count will change to 1', async () => {
  const { getByText } = render(Counter, { store });
  const incrementButton = getByText('點我加一');

  await fireEvent.click(incrementButton);

  expect(getByText('目前計數1')).toBeInTheDocument();
});
