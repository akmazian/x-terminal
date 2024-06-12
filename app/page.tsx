import dynamic from 'next/dynamic'

const App = dynamic(() => import('../components/shell'), {
    ssr: false,
})

export default function Page() {
    return <App />
}
