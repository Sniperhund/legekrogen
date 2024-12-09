export const Review = ({ message, author }) => {
	return (
		<article className="space-y-4">
			<p className="font-beVietnamPro text-xs">"{message}"</p>
			<p className="font-adventPro font-light text-xs italic">{author}</p>
		</article>
	)
}
