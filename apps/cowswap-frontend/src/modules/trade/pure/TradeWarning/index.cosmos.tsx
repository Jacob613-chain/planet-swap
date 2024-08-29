import { TradeWarning, TradeWarningType } from './index'

const text = (
  <span>
    great swap
  </span>
)

const tooltipContent = (
  <div>
    <small>
      really good
      {/* <br />
      <br />
      You may still move forward but{' '}
      <strong>please review carefully that the receive amounts are what you expect.</strong> */}
    </small>
  </div>
)

const Fixtures = {
  default: (
    <TradeWarning type={TradeWarningType.LOW} text={text} tooltipContent={tooltipContent} withoutAccepting={false} />
  ),
}

export default Fixtures
