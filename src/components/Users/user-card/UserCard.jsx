
export default function UserCard({ userId, fullName, userName, emailAddress, address, phoneNumber, websiteUrl, company, }) {
    return (
        <div className="user-card">
            <div className="user-information">
                <p>
                    <span>id:</span> {userId}
                </p>
                <p>
                    <span>name:</span> {fullName}
                </p>
                <p>
                    <span>username:</span> {userName}
                </p>
                <p>
                    <span>email:</span> {emailAddress}
                </p>
            </div>

            <div className="user-address">
                <h4>address:</h4>
                <div className="address-details">
                    <p>
                        <span>street:</span> {address.street}
                    </p>
                    <p>
                        <span>suite:</span> {address.suite}
                    </p>
                    <p>
                        <span>city:</span> {address.city}
                    </p>
                    <p>
                        <span>zipcode:</span> {address.zipcode}
                    </p>
                </div>

                <div className="address-geo">
                    <h4>geo:</h4>
                    <div className="geo-details">
                        <p>
                            <span>lat:</span> {address.geo.lat}
                        </p>
                        <p>
                            <span>lng:</span> {address.geo.lng}
                        </p>
                    </div>
                </div>
            </div>

            <div className="user-contact">
                <p>
                    <span>phone:</span> {phoneNumber}
                </p>
                <p>
                    <span>website:</span> {websiteUrl}
                </p>

                <div className="user-company">
                    <h4>company:</h4>
                    <div className="company-details">
                        <p>
                            <span>name:</span> {company.name}
                        </p>
                        <p>
                            <span>catch phrase:</span> {company.catchPhrase}
                        </p>
                        <p>
                            <span>bs:</span> {company.bs}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}