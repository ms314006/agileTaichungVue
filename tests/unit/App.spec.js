import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/vue';
import App from '@/App.vue';
import { store } from '@/store';
import { routes } from '@/router';

test('After click About link will enter to about page', async () => {
  const { getByText } = render(App, { store, routes });

  await fireEvent.click(getByText('About'));

  expect(getByText('This is an about page')).toBeInTheDocument();
});
