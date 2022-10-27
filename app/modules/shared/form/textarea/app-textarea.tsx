/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import { mergeClasses } from '@/modules/shared/html/merge-classes'

const AppTextarea = forwardRef<
  HTMLTextAreaElement,
  JSX.IntrinsicElements['textarea']
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={mergeClasses(
      'block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500',
      className
    )}
    rows={5}
    {...props}
  />
))

export default AppTextarea
