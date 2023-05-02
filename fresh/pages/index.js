export default function Home() {
  let name = 'jyp'
  let age = 20
  let link = 'http://google.com'
    return (
    <div>
      <h4 className="title">주윤 후레시</h4>
      <p className="title-sub">by dev {name}</p>
      <a href={link}>google</a>
    </div>
  )
}