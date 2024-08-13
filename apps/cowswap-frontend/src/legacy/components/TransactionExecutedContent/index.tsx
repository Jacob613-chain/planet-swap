import cowMeditatingSmooth from '@cowprotocol/assets/images/cow-meditating-smoooth.svg'
import { SupportedChainId } from '@cowprotocol/cow-sdk'

import { DisplayLink } from 'legacy/components/TransactionConfirmationModal/DisplayLink'
import { Order } from 'legacy/state/orders/actions'

import { useGetSurplusData } from 'common/hooks/useGetSurplusFiatValue'
import { getExecutedSummaryData } from 'utils/getExecutedSummaryData'
import { parseOrder } from 'utils/orderUtils/parseOrder'

import * as styledEl from './styled'

export function TransactionExecutedContent({
  order,
  chainId,
  hash,
}: {
  order: Order
  chainId: SupportedChainId
  hash?: string
}) {
  const parsedOrder = parseOrder(order)
  const { formattedFilledAmount, formattedSwappedAmount } = getExecutedSummaryData(parsedOrder)
  const { surplusFiatValue, showFiatValue, surplusToken, surplusAmount } = useGetSurplusData(parsedOrder)

  return (
    <styledEl.ExecutedWrapper>
      <img src={cowMeditatingSmooth} alt="Cow Smoooth ..." />

    </styledEl.ExecutedWrapper>
  )
}
