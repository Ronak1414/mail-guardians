import org.hyperledger.fabric.shim.ChaincodeException;
import org.hyperledger.fabric.shim.ChaincodeResponse;
import org.hyperledger.fabric.shim.ChaincodeStub;
import org.hyperledger.fabric.contract.ContractInterface;
import org.hyperledger.fabric.contract.annotation.Contract;
import org.hyperledger.fabric.contract.annotation.Default;
import org.hyperledger.fabric.contract.annotation.Transaction;
import org.hyperledger.fabric.shim.ChaincodeStub;

@Contract(
        name = "CarShowroomChaincode",
        info = @org.hyperledger.fabric.contract.annotation.Info(
                title = "Car Showroom Chaincode",
                description = "Chaincode for managing car showroom inventory",
                version = "1.0"
        )
)
@Default
public class CarShowroomChaincode implements ContractInterface {

    @Override
    public void beforeTransaction(Context ctx) {
        // Optional: Logic to execute before each transaction
    }

    @Override
    public void afterTransaction(Context ctx, ChaincodeResponse response) {
        // Optional: Logic to execute after each transaction
    }

    @Transaction
    public void addCar(Context ctx, String carId, String make, String model, int year, double price) {
        ChaincodeStub stub = ctx.getStub();

        // Check if the car already exists
        if (carExists(stub, carId)) {
            throw new ChaincodeException("Car with ID " + carId + " already exists");
        }

        // Create a JSON object representing the car
        String carJson = String.format("{\"make\": \"%s\", \"model\": \"%s\", \"year\": %d, \"price\": %.2f}", make, model, year, price);

        // Save the car to the ledger
        stub.putStringState(carId, carJson);
    }

    @Transaction
    public String getCar(Context ctx, String carId) {
        ChaincodeStub stub = ctx.getStub();
        return stub.getStringState(carId);
    }

    // Additional transaction functions can be defined here

    private boolean carExists(ChaincodeStub stub, String carId) {
        String carJson = stub.getStringState(carId);
        return (carJson != null && !carJson.isEmpty());
    }
}
